import React, { ReactElement } from 'react'
import GameCard from 'components/GameCard'
import { Game } from 'types'

interface Props {
	err: string
	games: Game[]
}

const GameList = ({ err, games }: Props): ReactElement => {
	if (err) {
		return <p>Unable to fetch games</p>
	}
	if (games?.length) {
		return <p>No games available</p>
	}
	return (
		<ul>
			{games.map(game => (
				<li key={game.id}>
					<GameCard content={game} />
				</li>
			))}
		</ul>
	)
}

export default GameList
