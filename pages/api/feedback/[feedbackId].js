import { buildFeedBackPath, extractFeedback } from "./index";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedBackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
