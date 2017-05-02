export type GuidestarType = {
  message: string,
  time: number
};

export interface DatabaseType {
  guidestar?: Array<GuidestarType>
}
