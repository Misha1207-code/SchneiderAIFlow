import re


class WorkflowAnalyzer:

    def analyze(self, prompt: str):

        prompt_lower = prompt.lower()

        workflow_name = self.detect_workflow(prompt_lower)

        trigger = self.detect_trigger(prompt_lower)

        actions = self.detect_actions(prompt_lower)

        connectors = self.detect_connectors(prompt_lower)

        complexity = self.calculate_complexity(actions)

        recommendations = self.generate_recommendations(connectors)

        return {

            "workflow_name": workflow_name,

            "trigger": trigger,

            "actions": actions,

            "connectors": connectors,

            "complexity": complexity,

            "recommendations": recommendations

        }

    def detect_workflow(self, prompt):

        if "purchase order" in prompt:
            return "Purchase Order Processing"

        if "invoice" in prompt:
            return "Invoice Processing"

        if "contract" in prompt:
            return "Contract Approval"

        return "Custom Workflow"

    def detect_trigger(self, prompt):

        if "sharepoint" in prompt:
            return "SharePoint Upload"

        if "email" in prompt or "outlook" in prompt:
            return "Email Received"

        if "excel" in prompt:
            return "Excel Row Added"

        return "Manual Trigger"

    def detect_actions(self, prompt):

        actions = []

        keywords = {

            "validate": "Validate Document",

            "update": "Update Master Tracker",

            "notify": "Notify Manager",

            "archive": "Archive File",

            "approve": "Approval",

            "email": "Send Email",

            "create": "Create Record"

        }

        for keyword, action in keywords.items():

            if keyword in prompt:

                actions.append(action)

        return actions

    def detect_connectors(self, prompt):

        connectors = []

        microsoft = {

            "sharepoint": "SharePoint",

            "excel": "Excel",

            "outlook": "Outlook",

            "teams": "Microsoft Teams",

            "onedrive": "OneDrive"

        }

        for keyword, connector in microsoft.items():

            if keyword in prompt:

                connectors.append(connector)

        return connectors

    def calculate_complexity(self, actions):

        if len(actions) <= 2:
            return "Low"

        elif len(actions) <= 5:
            return "Medium"

        return "High"

    def generate_recommendations(self, connectors):

        recommendations = []

        if "SharePoint" in connectors:

            recommendations.append(
                "Use SharePoint Trigger"
            )

        if "Excel" in connectors:

            recommendations.append(
                "Store metadata in Excel"
            )

        if "Microsoft Teams" in connectors:

            recommendations.append(
                "Notify Teams Channel"
            )

        return recommendations