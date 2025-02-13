import { Stack } from "expo-router";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Slot /> {/* This ensures that the correct screen is rendered */}
    </Stack>
  );
}
