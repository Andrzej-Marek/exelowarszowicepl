export type Estimate = {
  title: string;
  vinNo: string;
  brand: string;
  model: string;
  year: string;
  engine: string;
  engineDetails?: string;
  steering?: "LEFT" | "RIGHT";
  drive?: "AWD" | "RWD" | "FWD";
  description?: string;
  total: number;
  estimate: Array<{ name: string; make: string; price: number }>;
};

export const formatDrive = (drive: Estimate["drive"]) => {
  if (!drive) {
    return "";
  }
  return drive;
};

export const formatSteering = (steering: Estimate["steering"]) => {
  if (!steering) {
    return "";
  }
  return steering === "LEFT" ? "" : "Anglik";
};
