import { Input } from "@/4_widgets/components/ui/input";
import { Button } from "@/4_widgets/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/4_widgets/components/ui/table";
import { useState } from "react";
import { currentRankStore, rankStore } from "@/2_processes/stores/word";
import axios from "axios";
import { TableType } from "@/5_shared/tableType";

export default function GuessMain() {
  const [Try, setTry] = useState(0);
  const [inputList, setInputList] = useState<TableType[]>([]);
  const [input, setInput] = useState('');

  //const currentRanks = currentRankStore((state) => state.ranks);
  const appendRank = currentRankStore((state) => state.appendRank);
  const findRank = rankStore((state) => state.findRank);

  const sortCompare = (a: TableType, b: TableType) => {
    if(a.simil > b.simil) {
      return -1;
    }
    else if(a.simil == b.simil) {
      return 0;
    }
    else {
      return 1;
    }
  }

  const isExist = async () => {
    const { rank, value } = findRank(input);
    let v: number = value;

    if(value === -1) {
      await axios.get('new-word', {
        params: {
          word: input,
        }
      }).then(
        r => {
          v = r.data["value"];
        }
      ).catch(
        e => console.log(e)
      )
    }
    const tmp = [... inputList];

    let r: number | '#' | '-';
    if(rank === -1) {
      r = '#';
    } else if(rank > 100) {
      r = '-';
    } else {
      r = rank;
    }

    v = Number((v/2).toFixed(4));
    tmp.push({
      try: Try,
      word: input,
      simil: v,
      rank: r
    });
    tmp.sort(sortCompare);

    setInputList(tmp);
    setTry(Try+1);
    appendRank({input: value});
  }

  const submitClicked = () => {
    if(input === '') {
      return;
    }
    // const tmp = [...inputList];
    // tmp.push(input);
    // setInputList(tmp);
    isExist();
    setInput('');
  }

  return (
    <div className="w-screen h-8/9 flex flex-col justify-center items-center relative">
      <div className="w-1/3 flex absolute top-36">
        <Input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              submitClicked();
            }
          }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Your Guess"
          className="mx-1" />
        <Button onClick={submitClicked} type="submit" className="mx-1">Guess</Button>
      </div>

      <div className="w-0.29 h-0.45 mt-7 absolute top-64">
        <Table>
          <TableCaption>Guess The Today's Word!</TableCaption>
          <TableHeader>
            <TableRow className="text-center">
              <TableHead>#</TableHead>
              <TableHead>Guessed Word</TableHead>
              <TableHead>Similarity</TableHead>
              <TableHead>Rank</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="overflow-y-auto">
            {
              inputList.map((text, idx) => (
                <TableRow key={`row+${idx}`}>
                  <TableCell key={`cell+1+${idx}`}> {text.try} </TableCell>
                  <TableCell key={`cell+2+${idx}`}> {text.word} </TableCell>
                  <TableCell key={`cell+3+${idx}`}> {text.simil} </TableCell>
                  <TableCell key={`cell+4+${idx}`}> {text.rank} </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}