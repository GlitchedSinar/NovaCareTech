import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all consultation requests
  app.get("/api/consultation-requests", async (_req, res) => {
    try {
      const requests = await storage.getAllConsultationRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching consultation requests:", error);
      res.status(500).json({ message: "Failed to fetch consultation requests" });
    }
  });

  // Create new consultation request
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const request = await storage.createConsultationRequest(validatedData);
      
      // In a real application, you would send an email notification here
      // using nodemailer or similar service
      console.log("New consultation request received:", request);
      
      res.status(201).json(request);
    } catch (error) {
      console.error("Error creating consultation request:", error);
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create consultation request" });
      }
    }
  });

  // Update consultation request status
  app.patch("/api/consultation-requests/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || typeof status !== "string") {
        return res.status(400).json({ message: "Status is required and must be a string" });
      }

      const updatedRequest = await storage.updateConsultationRequestStatus(id, status);
      
      if (!updatedRequest) {
        return res.status(404).json({ message: "Consultation request not found" });
      }

      res.json(updatedRequest);
    } catch (error) {
      console.error("Error updating consultation request status:", error);
      res.status(500).json({ message: "Failed to update consultation request status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
