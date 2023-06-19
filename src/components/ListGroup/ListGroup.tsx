import { useState } from 'react';
// import styles from './ListGroup.module.css';
import './ListGroup.css';
import styled from './styled-components';

function ListGroup() {
  const items = [
    'New York',
    'San Francisco',
    'Beijing',
    'Tokyo',
    'Londo',
    'Shanghai',
    'Paris',
  ];
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? 'blue' : 'none')};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <ListItem
            active={index === setSelectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
