import SelectUnstyled from '@mui/base/SelectUnstyled';
import {selectUnstyledClasses} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {optionUnstyledClasses} from "@mui/base/OptionUnstyled";
import {PoppingsInputLabel} from "../mini-components/Typography";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import {Paper, Box} from "@mui/material";
import PopperUnstyled from "@mui/base/PopperUnstyled";

function CustomSelect({ RootButton, ...others}: any) {
  const components = {
    Root: RootButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
  };
  return <SelectUnstyled {...others} components={components} />;
}

export function Select({items, ...others}: any) {
  const [currentItem, setCurrentItem] = useState(items[0]);
  return (
      <CustomSelect  value={currentItem} onChange={setCurrentItem} {...others}>
        {items.map((item: string) => (
            <PoppingsInputLabel>
              <StyledOption key={item} value={item}>
                  {item}
              </StyledOption>
            </PoppingsInputLabel>
        ))}
      </CustomSelect>

  );
}




export const SelectStyledButton = styled('button')`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  min-height: calc(1.5em + 22px);
  max-width: 50%;
  marginLeft: 6rem;
  background: #fff;
  border: 1px solid rgba(10, 37, 64, 0.24);
  color: #666666;
  border-radius: 0.4rem;
  text-align: left;
  line-height: 1.5;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);


  &.${selectUnstyledClasses.expanded} {
    border-radius: 0.75em 0.75em 0 0;
    &::after {
      font-family: 'Material Icons';
      content: '\\e316';     
    }
  }
  &::after {
    font-family: 'Material Icons';
    content: "\\e313";
    float: right;
  }
`;

export const StyledListbox = styled(Paper)`
  margin-top: .3rem;
  font-size: 1rem;
  box-sizing: border-box;
  border-radius: .7rem;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.1);
  `;

export const StyledOption= styled(OptionUnstyled)(({ theme }: any) => ({
    listStyle: 'none',
    padding: '1rem 1rem 1rem .5rem',
    margin: 0,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
    maxHeight: '.9rem',
    // boxShadow: '5px 10px #888888',

    borderTop: `.1rem solid ${theme.palette.divider}`,
    '&:last-of-type': {
        borderBottom: 'none',
    },

    '&.${optionUnstyledClasses.disabled}': {
        color: theme.palette.action.disabled,
    },

    '&.${optionUnstyledClasses.selected}': {
        backgroundColor: '#F33451',
    },

    '&.${optionUnstyledClasses.highlighted}': {
        backgroundColor: '#F33451',
        color: '#F33451',
    },

    '&.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected}': {
        backgroundColor: '#F33451',
        color: '#F33451',
    },

    '&:hover:not(.${optionUnstyledClasses.disabled})': {
        backgroundColor: '#F33451',
    },
}));

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
  width: 12.5%;
`;

export const SelectShopFormContainer = styled(Box)(() => ({
    margin: '30% 7% ',
}));

export const SelectShopContainer = styled(Box)(() => ({
    marginTop: '5%',
}));