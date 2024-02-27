import { Box, Button } from "@nycplanning/streetscape";

export default function Index() {
  return (
    <Box bg="gray.700" w="100%" p={4} color="white">
      <Button
        variant="secondary"
        size="sm"
      >
        Hello Streetscape!
      </Button>
    </Box>
  );
}
