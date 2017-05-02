import { GetDatabase, SaveDatabase } from "../database/index";
import { DatabaseType } from "../database/types";
import { RequestType, ResponseType } from "../core/types";
import { GuidestarType } from "../database/types";

async function IncrementLog(request: RequestType, response: ResponseType) {
  try {
    const database: DatabaseType = await GetDatabase();

    if (typeof database.guidestar === "undefined") {
      database.guidestar = [];
    }

    const nextData: GuidestarType = {
      message: "Another API call",
      time: new Date().getTime()
    };

    database.guidestar.push(nextData);

    await SaveDatabase(database);

    response.success();
  } catch (err) {
    response.fail(err);
  }
}

export default IncrementLog;
