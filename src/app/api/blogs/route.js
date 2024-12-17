import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("blogs").select();

  if (error) {
    return NextResponse.json(
      { error: "Could not fetch blogs" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}