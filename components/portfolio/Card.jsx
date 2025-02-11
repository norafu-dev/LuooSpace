import Image from "next/image";
import { getImageInfo } from "@/lib/sanity/utils";
import Link from "next/link";

const Card = ({ item }) => {
  const { title, slug, description, cover, category } = item;
  const { imgUrl, ratio } = getImageInfo(cover);

  return (
    <Link href={`/portfolio/${slug}`} className="flex flex-col items-center">
      <figure style={{ aspectRatio: ratio }} className="relative w-full">
        <Image src={imgUrl} alt={title} fill />
      </figure>
      <h3 className="text-3xl font-[500] mt-8 mb-2">{title}</h3>
      <Description description={description} />
      <p className="text-sm text-gray-800 mt-4 italic">{category}</p>
    </Link>
  );
};

const Description = ({ description }) => {
  // 分三行显示，第一行字数最多，是总字数的三分之一，第二行字数次多，第三行字数最少，呈现倒三角。
  const lines = description.split(" ");
  const firstLine = lines
    .slice(0, Math.floor((lines.length * 5) / 15))
    .join(" ");
  const secondLine = lines
    .slice(
      Math.floor((lines.length * 5) / 15),
      Math.floor((lines.length * 10) / 15)
    )
    .join(" ");
  const thirdLine = lines.slice(Math.floor((lines.length * 10) / 15)).join(" ");
  return (
    <p className="text-sm text-center font-[100] text-zinc-500">
      {firstLine}
      <br />
      {secondLine}
      <br />
      {thirdLine}
    </p>
  );
};

export default Card;
