import Image from "next/image";

export default function NotFound() {
  return (
    // Using calc to account for navbar (~80px) and footer (~60px) and any padding
    <Image
      alt="404"
      height="521"
      width="694"
      src="https://images.unsplash.com/photo-1693338608971-59ced26140d1?q=80&w=3440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
}
