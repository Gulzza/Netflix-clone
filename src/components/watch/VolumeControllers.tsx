import { Stack, Slider, styled } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayerControlButton from "./PlayerControlButton";

const StyledSlider = styled(Slider)({
  height: 5,
  borderRadius: 0,
  padding: 0,
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "red",
  },
  "& .MuiSlider-rail": {
    border: "none",
    backgroundColor: "white",
    opacity: 0.85,
  },
  "& .MuiSlider-thumb": {
    height: 10,
    width: 10,
    backgroundColor: "red",
    boxShadow: "inherit",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      height: 15,
      width: 15,
    },
    "&:before": {
      display: "none",
    },
  },
});

type VolumeControllersProps = {
  value: number;
  handleVolume: (_: Event, value: number | number[]) => void;
  handleVolumeToggle: React.MouseEventHandler<HTMLButtonElement>;
  muted: boolean;
};

export default function VolumeControllers({
  value,
  handleVolume,
  handleVolumeToggle,
  muted,
}: VolumeControllersProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>
      <PlayerControlButton onClick={handleVolumeToggle}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </PlayerControlButton>

      <StyledSlider
        max={100}
        value={value * 100}
        valueLabelDisplay="auto"
        onChange={handleVolume}
        sx={{ width: { xs: 60, sm: 80, md: 100 } }}
      />
    </Stack>
  );
}
