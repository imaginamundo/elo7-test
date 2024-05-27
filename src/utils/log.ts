export default function log(data: any) {
  if (process.env.NODE_ENV === "production") console.log(data);
}
