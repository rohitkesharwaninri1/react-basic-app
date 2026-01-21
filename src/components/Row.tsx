import React, { memo } from "react";
import { Comment } from "../api/api.ts";

interface RowProps {
  data: Comment;
  style: React.CSSProperties;
}

const Row: React.FC<RowProps> = ({ data, style }) => {
  return (
    <div
      style={{
        ...style,
        // padding: "8px",
        // borderBottom: "1px solid #ddd",
      }}
    >
      <strong>
        {data.id}. {data.name}
      </strong>
      <p>{data.email}</p>
    </div>
  );
};

export default memo(Row);
