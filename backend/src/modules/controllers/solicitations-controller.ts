import { Request, Response } from "express";
import { SolicitationsService } from "../services/solicitations-service";

const solicitationsService = new SolicitationsService();

export const findAll = async (req: Request, res: Response) => {
  try {
    const response = await solicitationsService.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor", status: 500 });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const response = await solicitationsService.create(req.body);
    res.status(201).json(response); // 201 Created
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor", status: 500 });
  }
};

export const cardProblems = async (req: Request, res: Response) => {
  try {
    const response = await solicitationsService.cardProblems();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor", status: 500 });
  }
};

export const loans = async (req: Request, res: Response) => {
  try {
    const response = await solicitationsService.loans();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor", status: 500 });
  }
};

export const others = async (req: Request, res: Response) => {
  try {
    const response = await solicitationsService.others();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor", status: 500 });
  }
};

export const finish = async (req: Request, res: Response) => {
  try {
    const response = await solicitationsService.finish(Number(req.params.id));
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: "Recurso não encontrado", status: 404 });
  }
};