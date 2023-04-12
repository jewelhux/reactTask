import { useProductForIdQuery } from '../../DATA/api';
import { ModalProps } from '../../utils/type';
import { LoaderComponent } from './LoaderComponent';

export function ModaCardComponent({ active, setActive, cardId }: ModalProps) {
  const { isLoading, data } = useProductForIdQuery(cardId);
  return (
    <div
      className={active ? 'modal-active modal-card' : 'modal-card'}
      onClick={() => setActive(false)}
    >
      <div className="modal-card-content" onClick={(event) => event.stopPropagation()}>
        <p className="close-modal" onClick={() => setActive(false)}>
          X
        </p>
        {isLoading || data === undefined ? (
          <LoaderComponent />
        ) : (
          <>
            <h2 className="p-modal">{data.title}</h2>
            <div className="item-description">
              <p className="p-modal">Category: {data.category}</p>
              <p className="p-modal">Condition: {data.condition}</p>
              <p className="p-modal">Date: {data.date}</p>
            </div>
            <div className="img-container">
              <img src={data.image} alt="card-img" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
