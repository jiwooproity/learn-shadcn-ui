import { columns, Payment } from "@/shared/components/table/columns";
import DataTable from "@/shared/components/table/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "hi@example.com",
    },
    {
      id: "12312",
      amount: 200,
      status: "failed",
      email: "test@example.com",
    },
    {
      id: "asdasd",
      amount: 300,
      status: "processing",
      email: "hello@example.com",
    },
    {
      id: "123123",
      amount: 400,
      status: "pending",
      email: "jiwoo@example.com",
    },
  ];
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="main-container">
      <div className="main-box">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
