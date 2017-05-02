import * as FileSystem from "fs";
import { DatabaseType } from "./types";

const databaseFileName = "/tmp/database.json";

function CreateDatabase(database = {}) {
  return new Promise(function(resolve, reject) {
    FileSystem.writeFile(
      databaseFileName,
      JSON.stringify(database),
      "utf8",
      function(err: any) {
        if (err) reject(err);
        resolve();
      }
    );
  });
}

function CheckDatabase() {
  return new Promise(function(resolve, reject) {
    FileSystem.readFile(databaseFileName, "utf8", async function(
      err: any,
      data: string
    ) {
      if (err) {
        try {
          await CreateDatabase();
          resolve(await CheckDatabase());
        } catch (err) {
          reject(err);
        }
      }
      resolve(data);
    });
  });
}

export function GetDatabase() {
  return new Promise(async function(resolve, reject) {
    try {
      const dataString: any = await CheckDatabase();
      const database: DatabaseType = JSON.parse(dataString);
      resolve(database);
    } catch (err) {
      reject(err);
    }
  });
}

export function SaveDatabase(database: DatabaseType) {
  return CreateDatabase(database);
}
