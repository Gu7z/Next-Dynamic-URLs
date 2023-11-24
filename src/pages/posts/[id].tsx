import { Metadata } from "next";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Post",
  description: "Page for post",
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id,
    description: `Página para o post $${params.id}`,
  };
}

export default function Post() {
  const router = useRouter();

  return <p>Post: {router.query.id}</p>;
}
