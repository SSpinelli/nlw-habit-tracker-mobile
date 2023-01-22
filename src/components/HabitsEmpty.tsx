import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base">
      Você não estava monitorando nenhum hábito nesse dia! {" "}

      <Text 
        className="text-violet-400 text-base underline active:via-violet-500" 
        onPress={() => navigate("new")}
      >
        Comece cadastrando um.
      </Text>
    </Text>
  )
}