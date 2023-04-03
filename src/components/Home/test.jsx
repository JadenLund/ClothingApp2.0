import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Icon } from 'semantic-ui-react';
import Styles from './styles';
const getItems = () =>
    Array(5)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function Test() {
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id)
                );
            };

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ id }) => (
                <Styles
                    itemId={id} // NOTE: itemId is required for track items
                    title={id}
                    key={id}
                    onClick={handleClick(id)}
                    selected={isItemSelected(id)}
                />
            ))}
        </ScrollMenu>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
    return <Icon name="angle left" onClick={() => scrollPrev()} disabled={isFirstItemVisible} />
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    return <Icon name="angle right" disabled={isLastItemVisible} onClick={() => scrollNext()} />
}

export default Test;
