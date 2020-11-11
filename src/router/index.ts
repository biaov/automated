import utils from "@/utils";
import { VaWebhooks } from "@/middleware/valid/public";
import { CoWebhooks } from "@/controller/public";
const { Router } = utils;

Router.post("/public/webhooks", [VaWebhooks], CoWebhooks); // webhooks
