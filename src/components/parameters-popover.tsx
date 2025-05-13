"use client";

import React from "react";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ModelParameters } from "./types";

interface ParametersPopoverProps {
  parameters: ModelParameters;
  onParametersChange: (parameters: ModelParameters) => void;
}

export function ParametersPopover({
  parameters,
  onParametersChange,
}: ParametersPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Settings className="h-4 w-4" />
          Parameters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4 p-2">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Model Parameters</h4>
            <p className="text-sm text-muted-foreground">
              Adjust parameters for all models
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="temperature">Temperature</Label>
                <span className="text-xs text-muted-foreground">
                  {parameters.temperature}
                </span>
              </div>
              <Slider
                id="temperature"
                min={0}
                max={1}
                step={0.1}
                value={[parameters.temperature]}
                onValueChange={([value]) =>
                  onParametersChange({
                    ...parameters,
                    temperature: value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxTokens">Max Tokens</Label>
              <Input
                id="maxTokens"
                type="number"
                value={parameters.maxTokens || ""}
                onChange={(e) =>
                  onParametersChange({
                    ...parameters,
                    maxTokens: e.target.value ? parseInt(e.target.value) : null,
                  })
                }
                placeholder="No limit"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="topP">Top P</Label>
                <span className="text-xs text-muted-foreground">
                  {parameters.topP}
                </span>
              </div>
              <Slider
                id="topP"
                min={0}
                max={1}
                step={0.1}
                value={[parameters.topP]}
                onValueChange={([value]) =>
                  onParametersChange({ ...parameters, topP: value })
                }
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="frequencyPenalty">Frequency Penalty</Label>
                <span className="text-xs text-muted-foreground">
                  {parameters.frequencyPenalty}
                </span>
              </div>
              <Slider
                id="frequencyPenalty"
                min={0}
                max={2}
                step={0.1}
                value={[parameters.frequencyPenalty]}
                onValueChange={([value]) =>
                  onParametersChange({
                    ...parameters,
                    frequencyPenalty: value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="presencePenalty">Presence Penalty</Label>
                <span className="text-xs text-muted-foreground">
                  {parameters.presencePenalty}
                </span>
              </div>
              <Slider
                id="presencePenalty"
                min={0}
                max={2}
                step={0.1}
                value={[parameters.presencePenalty]}
                onValueChange={([value]) =>
                  onParametersChange({
                    ...parameters,
                    presencePenalty: value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
