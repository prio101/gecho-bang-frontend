import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Image
        src="/image.jpg"
        alt="Image"
        width={500}
        height={500}
      />
    </>
  );
}
