import { Components } from '@mui/material';

export default function componentStyleOverrides(theme: any): Components {
  const bgColor = theme.colors?.grey50;
  return {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
        maxWidthXl: {
          maxWidth: '1470px',

          '@media (min-width: 1536px)': {
            maxWidth: '1470px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px',

          '&:hover': {
            backgroundColor: theme.colors?.primaryMain,
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: theme.colors?.paper,
          },
        },
      ],
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: '24px',
        },
        title: {
          fontSize: '1.125rem',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.menuSelected,
            backgroundColor: theme.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.menuSelectedBack,
            },
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected,
            },
          },
          '&:hover': {
            backgroundColor: theme.menuSelectedBack,
            color: theme.menuSelected,
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: '36px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors?.grey400,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px',
        },
        valueLabel: {
          color: theme?.colors?.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.primary200,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        },
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            color: theme.paper,
            backgroundColor: '#142850',
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',
          cursor: 'pointer',
          '&:hover, &.active': {
            color: theme.colors?.primaryMain,
          },
        },
      },
    },
  };
}
