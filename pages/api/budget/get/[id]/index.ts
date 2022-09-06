import connectMongo from "../../../../../lib/mongodb";
import Budget from "../../../../../models/budget";
import colors from "colors";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getBudget(
  req: { query: { getId: any } },
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
    console.log("GETID.TS");
    console.log("CONNECTING TO MONGO");

    await connectMongo();
    console.log("CONNECTED TO MONGO!");

    const { getId } = req.query;
    console.log("GETTING DOCUMENT");

    const budget = await Budget.find({ _id: getId }).exec();
    console.log("HIT");
    res.status(200).json(budget);

    console.log("GOT DOCUMENT!");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
