<?php

namespace App\Http\Resources;

use App\Enums\TransactionTypes;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->order_id,
            'no' => $this->no,
            'user' => $this->whenLoaded('user'),
            'amount' => $this->order_value,
            'balance' => $this->balance,
            'transaction_type' => $this->transaction_type,
            'type' => $this->transaction_type?->label(),
            'status' => $this->status,
            'doctor' => $this->doctor(),
            'appointment' => new AppointmentResource($this->appointment),
            'test' => new TestPackageResource($this->test),
            'medication' => new MedicationResource($this->medication),
            'created_at' => $this->created_at,
            'is_paid' => $this->is_order_paid,
            'items' => $this->items,
            'payment_status' => '',
            'source' => $this->source,
            'date' => $this->created_at?->format('jS F Y h:i A'),
            'result' => $this->result?->result,
        ];
    }

    function doctor(){
        return match($this->transaction_type) {
            TransactionTypes::MEDICATION => $this->medication?->doctor,
            TransactionTypes::APPOINTMENT => $this->appointment?->doctor,
            default => null
        };
    }
}
