import { CSSProperties } from "react";
import { FaChevronRight } from "react-icons/fa";

interface ICardProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Card({ title, description, image }: ICardProps) {
  return (
    <div className="flex gap-4 shadow-md shadow-slate-700/20 bg-white p-4 rounded-md">
      <div
        className="flex w-32 bg-slate-300"
        style={
          (image && {
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }) as CSSProperties
        }
      />
      <div className="flex gap-1">
        <FaChevronRight size={16} className="mt-1" />
        <div>
          <h6 className="font-bold">{title}</h6>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
