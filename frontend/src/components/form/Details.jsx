import { useResume } from "@/contexts/ResumeContext";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function Details() {
  const { state, setState } = useResume();

  const handleInputChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      details: {
        ...prevState.details,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input
          value={state.details.name || ""}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>

      <div>
        <Label>Email</Label>
        <Input
          value={state.details.email || ""}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>

      <div>
        <Label>Phone</Label>
        <Input
          value={state.details.phone || ""}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
      </div>

      <div>
        <Label>City</Label>
        <Input
          value={state.details.city || ""}
          onChange={(e) => handleInputChange("city", e.target.value)}
        />
      </div>

      <div>
        <Label>State</Label>
        <Input
          value={state.details.state || ""}
          onChange={(e) => handleInputChange("state", e.target.value)}
        />
      </div>

      <div>
        <Label>LinkedIn</Label>
        <Input
          value={state.details.linkedin || ""}
          onChange={(e) => handleInputChange("linkedin", e.target.value)}
        />
      </div>

      <div>
        <Label>GitHub</Label>
        <Input
          value={state.details.github || ""}
          onChange={(e) => handleInputChange("github", e.target.value)}
        />
      </div>

      <div>
        <Label>LeetCode</Label>
        <Input
          value={state.details.leetcode || ""}
          onChange={(e) => handleInputChange("leetcode", e.target.value)}
        />
      </div>
    </div>
  );
}

export default Details;
