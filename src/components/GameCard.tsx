import React from "react";
import { Game } from "../hooks/useGames";
import { Text, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconLList from "./PlatformIconLList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconLList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;