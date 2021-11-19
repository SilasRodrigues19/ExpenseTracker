import * as C from './styles';
import { Item } from '../../types/Item';
import { dateFormat } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{dateFormat(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'rgba(255, 0, 1, .7)' : 'rgba(0, 255, 0, .7)'}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
}