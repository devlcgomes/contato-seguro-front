import { Text } from "@radix-ui/themes";
import * as S from "./styles";

export function BookGenreChart() {
  return (
    <S.ChartContainer>
      <Text size="5" weight="bold" mb="4">
        Book Genres Analytics
      </Text>
      <div>
        {/* Aqui iremos implementar o gráfico usando uma biblioteca como recharts ou chart.js */}
        <Text>Chart will be implemented here</Text>
      </div>
    </S.ChartContainer>
  );
}
