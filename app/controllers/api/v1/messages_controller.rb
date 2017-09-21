class Api::V1::MessagesController < ApiController

  def index
    @messages = Message.all
    render json: @messages, each_serializer: Api::V1::MessageSerializer
  end

  def show 
    @messages = Message.where(receiveable_id: params[:id])
    render json: @messages, each_serializer: Api::V1::MessageSerializer
  end

  def create
    @message = Message.create(message_params)

    if @message.save
      render json: @message, serializer: Api::V1::MessageSerializer
    else
      render json: { message: @message.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    @message = Message.find(params[:id])

    if @message.update_attributes(channel_params)
      render json: @message, serializer: Api::V1::MessageSerializer
    else
      render json: { message: @message.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :receiveable_id, :receiveable_type)
  end
end
