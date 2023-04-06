import React, { useEffect, useState } from 'react';
import { getProductForId } from '../../DATA/api';
import { ICard } from '../../utils/interfaces';
import { ModalProps } from '../../utils/type';
import { LoaderComponent } from './LoaderComponent';

export function ModaCardComponent({ active, setActive, cardId }: ModalProps) {
  const [card, setCard] = useState<ICard>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const currentCard = await getProductForId(cardId);
        setCard(currentCard);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [cardId]);

  return (
    <div
      className={active ? 'modal-active modal-card' : 'modal-card'}
      onClick={() => setActive(false)}
    >
      <div className="modal-card-content" onClick={(event) => event.stopPropagation()}>
        <p className="close-modal" onClick={() => setActive(false)}>
          X
        </p>
        {loading || card === undefined ? (
          <LoaderComponent />
        ) : (
          <>
            <h2>{card.title}</h2>
            <div className="item-description">
              <p>Category: {card.category}</p>
              <p>Condition: {card.condition}</p>
              <p>Date: {card.date}</p>
            </div>
            <div className="img-container">
              <img src={card.image} alt="card-img" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
