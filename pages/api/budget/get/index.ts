import connectMongo from "../../../../lib/mongodb";
import Budget from "../../../../models/budget";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getBudget(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any[]): void; new (): any };
    };
    json: (arg0: { error: unknown }) => void;
  }
) {
  try {
    console.log("GETALL.TS");
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO!");

    console.log("GETTING DOCUMENT");
    const budget = await Budget.find();

    res.status(200).json(budget);
    console.log("GOT DOCUMENT!");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
