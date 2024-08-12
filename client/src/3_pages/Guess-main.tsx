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

export default function GuessMain() {
  const [inputList, setInputList] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const submitClicked = () => {
    if(input === '') {
      return;
    }
    const tmp = [...inputList];
    tmp.push(input);
    setInputList(tmp);
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

      <div className="w-0.29 h-0.45 mt-10 absolute top-64">
        <Table>
          <TableCaption>hbi</TableCaption>
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
                  <TableCell key={`cell+1+${idx}`}> {idx + 1} </TableCell>
                  <TableCell key={`cell+2+${idx}`}> {text} </TableCell>
                  <TableCell key={`cell+3+${idx}`}> hi </TableCell>
                  <TableCell key={`cell+4+${idx}`}> hi </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}