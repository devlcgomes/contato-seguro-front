import { useEffect, useState } from "react";
import { MOTIVATIONAL_QUOTES } from "../../constants/motivationalQuotes";
import * as S from "./styles";

export function QuotesCarousel() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === MOTIVATIONAL_QUOTES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = MOTIVATIONAL_QUOTES[currentQuoteIndex];

  return (
    <S.Container>
      <S.Content>
        <S.Quote>{currentQuote.quote}</S.Quote>
        <S.Author>— {currentQuote.author}</S.Author>
      </S.Content>
    </S.Container>
  );
}
