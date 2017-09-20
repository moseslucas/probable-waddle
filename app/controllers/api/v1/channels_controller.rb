class Api::V1::ChannelsController < ApiController
  def index
    @channels = Channel.all
    render json: @channels, each_serializer: Api::V1::ChannelSerializer
  end

  def create
    case channel_params[:type]
      when 'PublicChannel'
        @channel = PublicChannel.new(channel_params)
      when 'PrivateChannel'
        @channel = PrivateChannel.new(channel_params)
      else
        @channel = GroupChannel.new(channel_params)
    end

    if @channel.save
      render json: @channel, serializer: Api::V1::ChannelSerializer
    else
      render json: { message: @channel.errors.full_messages.to_sentence }, status: 422
    end
  end
  #
  # def update
  #   @user = User.find(params[:id])
  #
  #   if @user.update_attributes(user_params)
  #     render json: @user, serializer: Api::V1::UserSerializer
  #   else
  #     render json: { message: @user.errors.full_messages.to_sentence }, status: 422
  #   end
  # end

  private

  def channel_params
    params.require(:channel).permit(:name, :type)
  end
end
