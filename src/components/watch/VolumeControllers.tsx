import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Player from "video.js/dist/types/player";
import { Box, Stack, Typography, Slider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SettingsIcon from "@mui/icons-material/Settings";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useWindowSize } from "src/hooks/useWindowSize";
import MainTitleTypography from "src/components/MainTitleTypography";
import VolumeControllers from "src/components/watch/VolumeControllers";
import VideoJSPlayer from "src/components/watch/VideoJSPlayer";
import PlayerSeekBar from "src/components/watch/PlayerSeekBar";
import PlayerControlButton from "src/components/watch/PlayerControlButton";
import { formatTime } from "src/utils/common";

const StyledSlider = styled(Slider)({
  height: 5,
  borderRadius: 0,
  padding: 0,
  "& .NetflixSlider-track": {
    border: "none",
    backgroundColor: "red",
  },
  "& .NetflixSlider-rail": {
    border: "none",
    backgroundColor: "white",
    opacity: 0.85,
  },
  "& .NetflixSlider-thumb": {
    height: 10,
    width: 10,
    backgroundColor: "red",
    "&:focus, &:hover, &.Netflix-active, &.Netflix-focusVisible": {
      boxShadow: "inherit",
      height: 15,
      width: 15,
    },
    "&:before": {
      display: "none",
    },
  },
});

export default function VolumeControllers({
  value,
  handleVolume,
  handleVolumeToggle,
  muted,
}: {
  value: number;
  handleVolume: SliderUnstyledOwnProps["onChange"];
  handleVolumeToggle: React.MouseEventHandler<HTMLButtonElement>;
  muted: boolean;
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={{ xs: 0.5, sm: 1 }}
      // sx={{
      //   "&:hover NetflixSlider-root": {
      //     display: "inline-block",
      //   },
      // }}
    >
      <PlayerControlButton onClick={handleVolumeToggle}>
        {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </PlayerControlButton>
      <StyledSlider
        max={100}
        value={value * 100}
        valueLabelDisplay="auto"
        valueLabelFormat={(x: number) => x}
        onChange={handleVolume}
        sx={{ width: { xs: 60, sm: 80, md: 100 } }}
      />
    </Stack>
  );
}
