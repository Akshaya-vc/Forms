import React from 'react';

import ShortTextIcon from '@mui/icons-material/ShortText';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AppsIcon from '@mui/icons-material/Apps';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const types = [
  { value: 'short-answer', label: 'Short answer', icon: <ShortTextIcon /> },
  { value: 'long-answer', label: 'Paragraph', icon: <FormatAlignLeftIcon /> },
  {
    value: 'multiple-choice',
    label: 'Multiple choice',
    icon: <RadioButtonCheckedIcon />,
  },
  { value: 'checkbox', label: 'Checkbox', icon: <CheckBoxIcon /> },
  { value: 'dropdown', label: 'Dropdown', icon: <ArrowDropDownCircleIcon /> },
  {
    value: 'file-upload',
    label: 'File upload',
    icon: <CloudUploadIcon />,
  },
  { value: 'linear-scale', label: 'Linear scale', icon: <LinearScaleIcon /> },
  {
    value: 'multiple-choice-grid',
    label: 'Multiple-choice grid',
    icon: <DragIndicatorIcon />,
  },
  { value: 'tick-box-grid', label: 'Tick box grid', icon: <AppsIcon /> },
  { value: 'date', label: 'Date', icon: <DateRangeIcon /> },
  { value: 'time', label: 'Time', icon: <AccessTimeIcon /> },
];

export default types;
