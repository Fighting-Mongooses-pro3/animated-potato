import connectMongo from "../../../../lib/mongodb";
import Budget from "../../../../models/budget";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addBudget(
  req: { body: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { success: boolean; data: any }): void; new (): any };
    };
    json: (arg0: { error: unknown }) => void;
  }
) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");

    const budget = await Budget.create(req.body);

    console.log("CREATED DOCUMENT");

    res.status(200).json({ success: true, data: budget });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
