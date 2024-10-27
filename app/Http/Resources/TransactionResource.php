<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'no' => $this->no,
            'amount' => $this->amount,
            'status' => $this->status,
            'reference' => $this->transaction_reference,
            'type' => $this->transaction_type,
            'date' => $this->created_at?->toDayDateTimeString(),
            'user' => new PatientResource($this->patient),
        ];
    }
}
