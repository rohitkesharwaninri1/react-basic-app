import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { fetchComments, Comment } from "../api/api.ts";
import Row from "../components/Row.tsx";

const ROW_HEIGHT = 96;
const VIEWPORT_HEIGHT = 600;
const OVERSCAN = 5;
const TOTAL_COUNT = 410;

const VirtualizedList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<Comment[]>([]);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fetchedPages = useRef<Set<number>>(new Set());

  const [scrollTop, setScrollTop] = useState(0);

  /* ----------------------------------
     DATA FETCH (STRICT MODE SAFE)
  -----------------------------------*/
  useEffect(() => {
    if (!hasMore) return;
    if (fetchedPages.current.has(page)) return;
    setIsFetching(true);
    fetchComments(page)
      .then((newData) => {
        setData((prev) => {
          const merged = [...prev, ...newData];

          // STOP CONDITIONS
          if (newData.length === 0) {
            setHasMore(false);
          }

          return merged;
        });
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [page]);

  /* ----------------------------------
     SCROLL HANDLER (NO LAYOUT THRASH)
  -----------------------------------*/
  const onScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setScrollTop(el.scrollTop);
  }, []);

  /* ----------------------------------
     VIRTUALIZATION MATH
  -----------------------------------*/
  const totalHeight = data.length * ROW_HEIGHT;

  const startIndex = Math.max(Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN, 0);

  const visibleCount = Math.ceil(VIEWPORT_HEIGHT / ROW_HEIGHT) + OVERSCAN * 2;

  const endIndex = Math.min(startIndex + visibleCount, data.length);

  /* ----------------------------------
     INFINITE SCROLL (EDGE TRIGGERED)
  -----------------------------------*/
  useEffect(() => {
    if (
      !hasMore ||
      isFetching ||
      endIndex < data.length - visibleCount ||
      data.length === 0
    ) {
      return;
    }

    setPage((prev) => prev + 1);
  }, [endIndex, data.length, visibleCount, isFetching, hasMore]);

  /* ----------------------------------
     MEMOIZED VISIBLE SLICE
  -----------------------------------*/
  const visibleItems = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [data, startIndex, endIndex]);

  /* ----------------------------------
     RENDER
  -----------------------------------*/
  return (
    <div
      ref={containerRef}
      onScroll={onScroll}
      style={{
        height: VIEWPORT_HEIGHT,
        overflowY: "auto",
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map((item, index) => {
          const top = (startIndex + index) * ROW_HEIGHT;
          return (
            <Row
              key={item.id}
              data={item}
              style={{
                position: "absolute",
                top,
                height: ROW_HEIGHT,
                width: "100%",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VirtualizedList;
