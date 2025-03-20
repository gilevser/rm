import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function Demo() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');
	
  return (
    // <div>
    //   <div>
    //     <button onClick={() => refetch({
    //       params: {
    //         _limit: 3
    //       }
    //     })}>
    //       Перезапросить
    //     </button>
    //   </div>
    //   {isLoading && 'Загрузка...'}
    //   {error && 'Произошла ошибка'}
    //   {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    // </div>
   
      <div>
        <p>Значение из LocalStorage: {value}</p>
        <div>
          <button onClick={() => setItem('new storage value')}>Задать значение</button>
          <button onClick={() => removeItem()}>Удалить значение</button>
        </div>
      </div>
  );
}