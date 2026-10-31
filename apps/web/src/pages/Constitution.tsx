import { PageLayout } from "../components";

export default function Constitution() {
  return (
    <PageLayout>
    <div className="flex flex-col items-start">
      <h1 className="uppercase text-2xl font-black mb-4">
        Drexel YDSA Constitution
      </h1>
      <p className="text-lg italic font-medium ">
        Approved by Membership 5/10/2026
        <br /> <br />
        In effect 9/21/2026
      </p>
      <h2 className="uppercase text-xl font-black mt-8 mb-4">
        Article I. Name and Affiliation
      </h2>
      <ol className="list-decimal list-outside ml-6 text-lg">
        <li>
          The name of this organization shall be the Drexel University chapter
          of the Democratic Socialists of America, hereafter refered to as "the
          Chaper."
        </li>
        <li>
          The Chapter shall be the Drexel University chapter of the Young
          Democratic Socilaists of America, the youth wing of the Democratic
          Socialists of America.
        </li>
      </ol>
      <h2 className="uppercase text-xl font-black mt-8 mb-4">
        Article II. Purpose &amp; Mission Statement
      </h2>
      <ol className="list-decimal list-outside ml-6 text-lg">
        <li>
          Our mission is to educate and organize students and young people and
          to play a helpful and principled role in the movement for social
          justice. Within and throughout this struggle, we will articulate and
          defend the idea that true human liberation is impossible under
          capitalism. We seek social change which extends democracy into all
          aspects of life -- social, political and economic. This is the
          struggle for democratic socialism. Our vision of socialism is
          profoundly democratic, feminist, and anti-racist.
        </li>
      </ol>
    </div>
    </PageLayout>
  );
}
