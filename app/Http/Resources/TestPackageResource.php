<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TestPackageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->test_package_id,
            'name' => $this->test_package_name,
            'price' => $this->test_package_price,
            'description' => $this->test_package_desc,
            'test' => new TestResource($this->test)
        ];
    }
}
