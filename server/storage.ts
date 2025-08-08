import { type ConsultationRequest, type InsertConsultationRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getConsultationRequest(id: string): Promise<ConsultationRequest | undefined>;
  getAllConsultationRequests(): Promise<ConsultationRequest[]>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  updateConsultationRequestStatus(id: string, status: string): Promise<ConsultationRequest | undefined>;
}

export class MemStorage implements IStorage {
  private consultationRequests: Map<string, ConsultationRequest>;

  constructor() {
    this.consultationRequests = new Map();
  }

  async getConsultationRequest(id: string): Promise<ConsultationRequest | undefined> {
    return this.consultationRequests.get(id);
  }

  async getAllConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = {
      ...insertRequest,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async updateConsultationRequestStatus(id: string, status: string): Promise<ConsultationRequest | undefined> {
    const request = this.consultationRequests.get(id);
    if (request) {
      const updatedRequest = { ...request, status };
      this.consultationRequests.set(id, updatedRequest);
      return updatedRequest;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
