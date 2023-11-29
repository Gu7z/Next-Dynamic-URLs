import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Titulo do post ${params.id}`,
    description: `Descrição gerada dinamicamente para o post: ${params.id}`,
    openGraph: { images: ["https://picsum.photos/1200/630"] },
  };
}

export default function Post({ params }: Props) {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Post: {params.id}</h1>
      </div>
    </>
  );
}
