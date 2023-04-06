import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box component="section" py={5}>
      <Typography variant="h5" component="h3" pb={1} pt={4} textAlign="center">
        What is <i style={{ color: "#e57373" }}>Pomodoro</i> Technique?
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: { xs: "16px", md: "18px" },
          px: { xs: 2, md: 0 },
          textAlign: "justify",
        }}
      >
        The <strong>Pomodoro Technique</strong> is a method originally coined by
        <i> Francesco Cirillo</i> in the late 1980s. It uses a kitchen timer to
        break work into intervals, separated by short breaks. Each interval is
        known as a pomodoro, from the Italian word for tomato, after the
        tomato-shaped kitchen timer Cirillo used as a university student.
      </Typography>
    </Box>
  );
}
