"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon, PlusIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date>();
  return (
    <main className="flex w-full sm:flex-row flex-col items-center justify-center">
      <div className="flex w-full sm:flex-row flex-col items-center sm:items-start justify-center gap-4">
        <div className="flex flex-col gap-2 w-64 justify-start items-start">
          <p className="font-semibold text-lg">Detalhes do Projeto</p>

          <Input placeholder="Nome" />

          <Input placeholder="Descrição" />

          <Input placeholder="Cód. Verificador - SEI" />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal ",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Início do Projeto</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha o categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>CATEGORIA</SelectLabel>
                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                <SelectItem value="saude">Saúde</SelectItem>
                <SelectItem value="engenharia">Engenharia</SelectItem>
                <SelectItem value="armamento">Armamento</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha o demandante" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>DEMANDANTE</SelectLabel>
                <SelectItem value="cmt_geral">Comando Geral</SelectItem>
                <SelectItem value="sub_cmt_geral">Sub Comando Geral</SelectItem>
                <SelectItem value="chefe_emg">Chefe do EMG</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha o supervisor" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>SUPERVISOR</SelectLabel>
                <SelectItem value="cmt_geral">Comando Geral</SelectItem>
                <SelectItem value="sub_cmt_geral">Sub Comando Geral</SelectItem>
                <SelectItem value="chefe_emg">Chefe do EMG</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha o demandado" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>DEMANDADO</SelectLabel>
                <SelectItem value="dasis">DASIS</SelectItem>
                <SelectItem value="dtec">DTEC</SelectItem>
                <SelectItem value="das">CAS</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 w-64 justify-start items-start">
          <div className="flex flex-row gap-2">
            <p className="font-semibold text-lg">Cronograma do Projeto</p>
            <Button variant="default" size={"icon"}>
              <PlusIcon />
            </Button>
          </div>

          <div className="flex flex-col p-2 border-2 rounded-lg gap-2 w-full">
            <Input placeholder="Etapa" />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal ",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Início da tarefa</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col p-2 border-2 rounded-lg gap-2 w-full">
            <Input placeholder="Etapa" />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal ",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Início da tarefa</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col p-2 border-2 rounded-lg gap-2 w-full">
            <Input placeholder="Etapa" />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal ",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Início da tarefa</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col p-2 border-2 rounded-lg gap-2 w-full">
            <Input placeholder="Etapa" />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal ",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Início da tarefa</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </main>
  );
}
